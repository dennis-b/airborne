import { observable } from 'mobx';


export const homeStoreSelector = ({ appStore }) => ({ homeStore: appStore.homeStore });

export default class HomeStore {

    @observable selectedMessage = '';

    constructor() {
    }


}
