import { action, makeObservable, observable } from 'mobx';

const USER_TOKEN = '_rental_manager_user_token';

const FAKE_USER = { id: '1', name: 'Richard' }; // TODO: Remove when define the endpoint
export class MainStore {

  @observable
  user?: any; // TODO: Define model.

  constructor() {
    makeObservable(this);
    this.restoreSession().catch(console.error);

  }

  @action
  async restoreSession() {
    const sessionToken = localStorage.getItem(USER_TOKEN);
    if (sessionToken) {
      // this.user = await API.requestUser(sessionToken);
      this.user = Promise.resolve(FAKE_USER);
      return;
    }

  }

  @action
  async doLogin() {
    // this.user = await API.loginUser();
    this.user = Promise.resolve(FAKE_USER);
    localStorage.setItem(USER_TOKEN, 'user_token');
  }
}
