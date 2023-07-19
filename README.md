# listExtension-item-download-all

## Summary

List extension - item download all is a SharePoint Framework (SPFx) extension designed to enhance the functionality of SharePoint lists by enabling users to download all attachments associated with a specific list item. This extension simplifies the process of retrieving multiple attachments, streamlining productivity and data management within SharePoint lists.

[picture of the solution in action, if possible]

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.16-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Any special pre-requisites?

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
