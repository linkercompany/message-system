/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface base {
  body?: any;
  query: {
    message?: string;
    receiver?: string;
    sender?: string;
  };
  user: {
    permissions?: any;
  };
}

export interface message {
  message?: string;
  receiver?: string;
  sender?: string;
}

export interface messageRequired {
  message: string;
  receiver: string;
  sender: string;
}

export interface query {
  message?: string;
  receiver?: string;
  sender?: string;
}
