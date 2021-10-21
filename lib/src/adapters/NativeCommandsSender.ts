import { NativeModules } from 'react-native';

interface NativeCommandsModule {
  setRoot(commandId: string, layout: { root: any; modals: any[]; overlays: any[] }): Promise<any>;
  setDefaultOptions(options: object): void;
  mergeOptions(componentId: string, options: object): void;
  push(commandId: string, onComponentId: string, layout: object): Promise<any>;
  pop(commandId: string, componentId: string, options?: object): Promise<any>;
  popTo(commandId: string, componentId: string, options?: object): Promise<any>;
  popToRoot(commandId: string, componentId: string, options?: object): Promise<any>;
  setStackRoot(commandId: string, onComponentId: string, layout: object): Promise<any>;
  showModal(commandId: string, layout: object): Promise<any>;
  dismissModal(commandId: string, componentId: string, options?: object): Promise<any>;
  dismissAllModals(commandId: string, options?: object): Promise<any>;
  showOverlay(commandId: string, layout: object): Promise<any>;
  dismissOverlay(commandId: string, componentId: string): Promise<any>;
  dismissAllOverlays(commandId: string): Promise<any>;
  getLaunchArgs(commandId: string): Promise<any>;
}

export class NativeCommandsSender {
  private readonly nativeCommandsModule: NativeCommandsModule;
  private readonly enableJSI: boolean;
  // private readonly JSIModule: NativeCommandsModule;
  constructor() {
    this.enableJSI = false;

    this.nativeCommandsModule = this.enableJSI
      ? //@ts-ignore
        global.NavigationJSI
      : NativeModules.RNNBridgeModule;
  }

  setRoot(commandId: string, layout: { root: any; modals: any[]; overlays: any[] }) {
    // @ts-ignorec
    // return  global.setRoot(commandId, layout);
    return this.nativeCommandsModule.setRoot(commandId, layout);
  }

  setDefaultOptions(options: object) {
    return this.nativeCommandsModule.setDefaultOptions(options);
  }

  mergeOptions(componentId: string, options: object) {
    // @ts-ignore
    // return global.mergeOptions(componentId, options);
    return this.nativeCommandsModule.mergeOptions(componentId, options);
  }

  push(commandId: string, onComponentId: string, layout: object) {
    // @ts-ignore
    return global.push(commandId, onComponentId, layout);
    // return this.nativeCommandsModule.push(commandId, onComponentId, layout);
  }

  pop(commandId: string, componentId: string, options?: object) {
    return this.nativeCommandsModule.pop(commandId, componentId, options);
  }

  popTo(commandId: string, componentId: string, options?: object) {
    return this.nativeCommandsModule.popTo(commandId, componentId, options);
  }

  popToRoot(commandId: string, componentId: string, options?: object) {
    return this.nativeCommandsModule.popToRoot(commandId, componentId, options);
  }

  setStackRoot(commandId: string, onComponentId: string, layout: object) {
    return this.nativeCommandsModule.setStackRoot(commandId, onComponentId, layout);
  }

  showModal(commandId: string, layout: object) {
    return this.nativeCommandsModule.showModal(commandId, layout);
  }

  dismissModal(commandId: string, componentId: string, options?: object) {
    return this.nativeCommandsModule.dismissModal(commandId, componentId, options);
  }

  dismissAllModals(commandId: string, options?: object) {
    return this.nativeCommandsModule.dismissAllModals(commandId, options);
  }

  showOverlay(commandId: string, layout: object) {
    return this.nativeCommandsModule.showOverlay(commandId, layout);
  }

  dismissOverlay(commandId: string, componentId: string) {
    return this.nativeCommandsModule.dismissOverlay(commandId, componentId);
  }

  dismissAllOverlays(commandId: string) {
    return this.nativeCommandsModule.dismissAllOverlays(commandId);
  }

  getLaunchArgs(commandId: string) {
    return this.nativeCommandsModule.getLaunchArgs(commandId);
  }
}
