import React from "react";
import {
  LoginOptions,
  SecureStorage,
} from "../native-services/SecureStorageEcho/SecureStorageEcho";

export const PHONE_NUMBER = "phonenumber";
export const PASSWORD = "password";

export const useSecureStorage = (secureStorage: SecureStorage) => {
  const [credentials, setCredentials] = React.useState<LoginOptions>();

  const savePhoneNumberAndPassword = (
    phonenumber: string,
    password: string
  ) => {
    console.log("savePhoneNumberAndPassword");

    setCredentials({ phonenumber, password });

    console.log("save login");

    secureStorage.saveLogin({ password, phonenumber });
  };

  const removePhoneNumberAndPassword = () => {
    secureStorage.removeLogin();
  };

  React.useEffect(() => {
    secureStorage.getLogin().then(setCredentials);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    savePhoneNumberAndPassword,
    removePhoneNumberAndPassword,
    credentials,
  };
};
