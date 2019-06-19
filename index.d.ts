import { AxiosResponse } from "axios";
import { Message } from "@line/bot-sdk";

declare namespace LIFF {
  interface Data {
    language: string;

    context:
      | PartialContextNone
      | PartialContextUtoU
      | PartialContextRoom
      | PartialContextGroup;
  }

  interface PartialContextNone {
    type: "group";
  }

  interface PartialContextUtoU {
    type: "utou";
    userId: string;
    utouId: string;
  }

  interface PartialContextRoom {
    type: "room";
    userId: string;
    roomId: string;
  }

  interface PartialContextGroup {
    type: "group";
    userId: string;
    groupId: string;
  }

  interface OpenWindowOption {
    url: string;
    external: boolean;
  }

  interface Profile {
    userId: string;
    displayName: string;
    pictureUrl: string;
    statusMessage: string;
  }
}

interface LIFFStatic {
  init(
    successCallback: (data: LIFF.Data) => void,
    errorCallback: (err: Error) => void
  ): void;

  openWindow(option: LIFF.OpenWindowOption): void;

  getAccessToken(): string;

  getProfile(): Promise<LIFF.Profile>;

  sendMessages(messages: Message[]): Promise<AxiosResponse>;

  closeWindow(): void;

  initPlugins(pluginNames: string[]): Promise<void>;

  //  TODO `bluetooth`
}

declare const liff: LIFFStatic;

export { liff as default, LIFFStatic };
