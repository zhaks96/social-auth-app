import * as Facebook from 'fb-sdk-wrapper';

export interface FaceBookResponse {
  email: string;
  name: string;
  picture: string;
  authResponse: any;
}

export async function initFacebook(appId: string): Promise<void> {
  try {
    await Facebook.load();
    await Facebook.init({ appId });
  } catch (error) {
    console.error('Error initializing Facebook:', error);
    throw error; // Rethrow the error for the caller to handle if necessary
  }
}

export async function login(): Promise<FaceBookResponse | null> {
  try {
    const response = await Facebook.login({
      scope: 'public_profile,email',
      return_scopes: true
    });

    console.log(response);

    if (response.status !== 'connected') {
      return null;
    }

    const profile = await Facebook.api(
      `/${response.authResponse.userID}`,
      'get',
      {
        fields: ['email', 'name', 'picture', 'first_name', 'last_name', 'gender']
      }
    );

    const facebookResponse: FaceBookResponse = {
      ...profile,
      authResponse: response.authResponse
    };

    return facebookResponse;
  } catch (error) {
    console.error('Error during Facebook login:', error);
    throw error;
  }
}

export async function logout(): Promise<void> {
  try {
    await Facebook.logout();
  } catch (error) {
    console.error('Error during Facebook logout:', error);
    throw error;
  }
}
