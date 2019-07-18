import { action, observable } from "mobx";

export const appStoreSelector = ({ appStore }) => ({ appStore });

export class AppStore {

    @observable name: string = '';


    constructor() {
    }

    @action
    setName = (name: any) => this.name = name;


}
