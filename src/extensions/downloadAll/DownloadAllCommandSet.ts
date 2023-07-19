import { Log } from '@microsoft/sp-core-library';
import { SPHttpClient } from '@microsoft/sp-http';
import { BaseListViewCommandSet, Command, IListViewCommandSetExecuteEventParameters, IListViewCommandSetListViewUpdatedParameters, ListViewStateChangedEventArgs } from '@microsoft/sp-listview-extensibility';

import { sp } from "@pnp/sp/presets/all";
import * as JSZip from "jszip";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IDownloadAllCommandSetProperties {
  // This is an example; replace with your own properties
  sampleTextOne: string;
  sampleTextTwo: string;
}

interface SP {
  Attachment: {
    ServerRelativeUrl: string;
    FileName: string;
  }
}

const LOG_SOURCE: string = 'DownloadAllCommandSet';

export default class DownloadAllCommandSet extends BaseListViewCommandSet<IDownloadAllCommandSetProperties> {

  private _downloadAttachmentZip = async (itemAttachments: SP["Attachment"][]) => {
    const zip = new JSZip();
    const files = await Promise.all(
      itemAttachments.map(async attachment => {
        const response = await this.context.spHttpClient.get(attachment.ServerRelativeUrl, SPHttpClient.configurations.v1);
        const blob = await response.blob();
        return { data: blob, name: attachment.FileName };
      })
    );
    files.forEach(file => {
      zip.file(file.name, file.data);
    });
    const content = await zip.generateAsync({ type: 'blob' });
    const downloadLink = document.createElement('a');
    downloadLink.download = `attachments.zip`;
    downloadLink.href = URL.createObjectURL(content);
    downloadLink.click();
  }
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    const downloadCommand: Command = this.tryGetCommand('COMMAND_1');
    if (downloadCommand) {
      downloadCommand.visible = event.selectedRows.length > 0;
    }
  }

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized DownloadAllCommandSet');

    // initial state of the command's visibility
    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    compareOneCommand.visible = false;

    this.context.listView.listViewStateChangedEvent.add(this, this._onListViewStateChanged);

    return Promise.resolve();
  }

  public async onExecute(event: IListViewCommandSetExecuteEventParameters): Promise<void> {
    switch (event.itemId) {
      case 'COMMAND_1':
        const selectedItems = event.selectedRows;
      if (selectedItems.length === 1) {
        // Get the ID of the selected item
        const listId = this.context.pageContext.list.id.toString();
        const itemId = selectedItems[0].getValueByName("ID");
        console.log("Selected item ID: ", itemId);
    
    const itemAttachments: SP["Attachment"][] = await sp.web.lists.getById(listId).items.getById(itemId).attachmentFiles.get();
    await this._downloadAttachmentZip(itemAttachments); 
  }
      break;
      case 'COMMAND_2':   
     
      break;
    default:
      throw new Error('Unknown command');
  }
}



  private _onListViewStateChanged = (args: ListViewStateChangedEventArgs): void => {
    Log.info(LOG_SOURCE, 'List view state changed');

    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    if (compareOneCommand) {
      // This command should be hidden unless exactly one row is selected.
      compareOneCommand.visible = this.context.listView.selectedRows?.length === 1;
    }

    // TODO: Add your logic here

    // You should call this.raiseOnChage() to update the command bar
    this.raiseOnChange();
  }
}
