# listExtension-item-download-all

## Summary

List extension - item download all is a SharePoint Framework (SPFx) extension designed to enhance the functionality of SharePoint lists by enabling users to download all attachments associated with a specific list item. This extension simplifies the process of retrieving multiple attachments, streamlining productivity and data management within SharePoint lists.

![Solution preview](https://raw.githubusercontent.com/vjeremic90/listExtension-item-downloadAll/main/img/ListExtensionDownload.gif)

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.16-green.svg)

## Compatibility

![Compatible with SharePoint Online](https://img.shields.io/badge/SharePoint%20Online-Compatible-green.svg)

![Does not work with SharePoint 2019](https://img.shields.io/badge/SharePoint%20Server%202019-Incompatible-red.svg "SharePoint Server 2019 requires SPFx 1.4.1 or lower")

![Does not work with SharePoint 2016 (Feature Pack 2)](https://img.shields.io/badge/SharePoint%20Server%202016%20(Feature%20Pack%202)-Incompatible-red.svg "SharePoint Server 2016 Feature Pack 2 requires SPFx 1.1")

![Local Workbench Unsupported](https://img.shields.io/badge/Local%20Workbench-Unsupported-red.svg "Local workbench is no longer available as of SPFx 1.13 and above")


## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

- SPFx version : 1.16
- Node version : 16.15
- Global/Local app catalog

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| react-item-download-all | Vukasin Jeremic (Ln: vjeremic; Tw: @vjeremic90) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |

| 1.0     | July 19, 2023 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Installation

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - Run **npm install** to install project dependencies
  - Run **gulp bundle --ship** and **gulp package-solution --ship** to bundle and package the solution.
  - Deploy the package to your SharePoint environment


## Debug

  - In launch.json change site url : **https://enter-your-SharePoint-site/_layouts/workbench.aspx**
  - Run hosted workbench
  - In the command-line run **gulp serve**

## Features

  - Easy Attachment Retrieval: Users can now download all attachments attached to a particular SharePoint list item with just one click, eliminating the need for manual and time-consuming downloads.
  - Time-Saving Solution: With the SharePoint List Attachments Downloader, users can save time and effort by avoiding the manual task of downloading attachments one by one.




## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
