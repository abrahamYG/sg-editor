import type { TypeDescriptor } from "./TypeDescriptor";


export interface Value {
  guid?: string;
  type?: TypeDescriptor;
  value?: any;
}
