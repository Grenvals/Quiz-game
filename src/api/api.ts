import { ConfigAPIType } from './types';

export const configAPI = {
  getConfig: (): Promise<Array<ConfigAPIType>> => {
    return fetch('/config.json', {}).then((response) => response.json());
  },
};
