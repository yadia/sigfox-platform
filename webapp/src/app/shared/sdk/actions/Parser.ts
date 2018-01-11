/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Parser } from '../models';

export const ParserActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Parser'), {
  FIND_BY_ID_DEVICES: type('[Parser] findByIdDevices'),
  FIND_BY_ID_DEVICES_SUCCESS: type('[Parser] findByIdDevices success'),
  FIND_BY_ID_DEVICES_FAIL: type('[Parser] findByIdDevices fail'),

  DESTROY_BY_ID_DEVICES: type('[Parser] destroyByIdDevices'),
  DESTROY_BY_ID_DEVICES_SUCCESS: type('[Parser] destroyByIdDevices success'),
  DESTROY_BY_ID_DEVICES_FAIL: type('[Parser] destroyByIdDevices fail'),

  UPDATE_BY_ID_DEVICES: type('[Parser] updateByIdDevices'),
  UPDATE_BY_ID_DEVICES_SUCCESS: type('[Parser] updateByIdDevices success'),
  UPDATE_BY_ID_DEVICES_FAIL: type('[Parser] updateByIdDevices fail'),

  GET_ORGANIZATION: type('[Parser] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[Parser] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[Parser] getOrganization fail'),

  GET_DEVICES: type('[Parser] getDevices'),
  GET_DEVICES_SUCCESS: type('[Parser] getDevices success'),
  GET_DEVICES_FAIL: type('[Parser] getDevices fail'),

  CREATE_DEVICES: type('[Parser] createDevices'),
  CREATE_DEVICES_SUCCESS: type('[Parser] createDevices success'),
  CREATE_DEVICES_FAIL: type('[Parser] createDevices fail'),

  DELETE_DEVICES: type('[Parser] deleteDevices'),
  DELETE_DEVICES_SUCCESS: type('[Parser] deleteDevices success'),
  DELETE_DEVICES_FAIL: type('[Parser] deleteDevices fail'),

  PARSE_PAYLOAD: type('[Parser] parsePayload'),
  PARSE_PAYLOAD_SUCCESS: type('[Parser] parsePayload success'),
  PARSE_PAYLOAD_FAIL: type('[Parser] parsePayload fail'),

  CREATE_MANY_DEVICES: type('[Parser] createManyDevices'),
  CREATE_MANY_DEVICES_SUCCESS: type('[Parser] createManyDevices success'),
  CREATE_MANY_DEVICES_FAIL: type('[Parser] createManyDevices fail'),

});
export const ParserActions =
Object.assign(BaseLoopbackActionsFactory<Parser>(ParserActionTypes), {

  /**
   * findByIdDevices Action.
   * Find a related item by id for Devices.
   *
   * @param {any} id Parser id
   * @param {any} fk Foreign key for Devices
   * @param {any} meta (optional).
   * 
   */
  findByIdDevices: class implements Action {
    public readonly type = ParserActionTypes.FIND_BY_ID_DEVICES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdDevicesSuccess: class implements Action {
    public readonly type = ParserActionTypes.FIND_BY_ID_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdDevicesFail: class implements Action {
    public readonly type = ParserActionTypes.FIND_BY_ID_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdDevices Action.
   * Delete a related item by id for Devices.
   *
   * @param {any} id Parser id
   * @param {any} fk Foreign key for Devices
   * @param {any} meta (optional).
   * 
   */
  destroyByIdDevices: class implements Action {
    public readonly type = ParserActionTypes.DESTROY_BY_ID_DEVICES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdDevicesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdDevicesSuccess: class implements Action {
    public readonly type = ParserActionTypes.DESTROY_BY_ID_DEVICES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdDevicesFail: class implements Action {
    public readonly type = ParserActionTypes.DESTROY_BY_ID_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdDevices Action.
   * Update a related item by id for Devices.
   *
   * @param {any} id Parser id
   * @param {any} fk Foreign key for Devices
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdDevices: class implements Action {
    public readonly type = ParserActionTypes.UPDATE_BY_ID_DEVICES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdDevicesSuccess: class implements Action {
    public readonly type = ParserActionTypes.UPDATE_BY_ID_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdDevicesFail: class implements Action {
    public readonly type = ParserActionTypes.UPDATE_BY_ID_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOrganization Action.
   * Fetches belongsTo relation Organization.
   *
   * @param {any} id Parser id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = ParserActionTypes.GET_ORGANIZATION;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getOrganizationSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getOrganizationSuccess: class implements Action {
    public readonly type = ParserActionTypes.GET_ORGANIZATION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOrganizationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOrganizationFail: class implements Action {
    public readonly type = ParserActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getDevices Action.
   * Queries Devices of Parser.
   *
   * @param {any} id Parser id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getDevices: class implements Action {
    public readonly type = ParserActionTypes.GET_DEVICES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getDevicesSuccess: class implements Action {
    public readonly type = ParserActionTypes.GET_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getDevicesFail: class implements Action {
    public readonly type = ParserActionTypes.GET_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createDevices Action.
   * Creates a new instance in Devices of this model.
   *
   * @param {any} id Parser id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createDevices: class implements Action {
    public readonly type = ParserActionTypes.CREATE_DEVICES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createDevicesSuccess: class implements Action {
    public readonly type = ParserActionTypes.CREATE_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createDevicesFail: class implements Action {
    public readonly type = ParserActionTypes.CREATE_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteDevices Action.
   * Deletes all Devices of this model.
   *
   * @param {any} id Parser id
   * @param {any} meta (optional).
   * 
   */
  deleteDevices: class implements Action {
    public readonly type = ParserActionTypes.DELETE_DEVICES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteDevicesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteDevicesSuccess: class implements Action {
    public readonly type = ParserActionTypes.DELETE_DEVICES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteDevicesFail: class implements Action {
    public readonly type = ParserActionTypes.DELETE_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * parsePayload Action.
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {string} fn Parser function
   * @param {string} payload Sigfox payload (12 bytes max)
   * @param {object} req 
   * @param {any} meta (optional).
   * 
   */
  parsePayload: class implements Action {
    public readonly type = ParserActionTypes.PARSE_PAYLOAD;
      public payload: {fn: any, payload: any, req: any};

    constructor(fn: any, payload: any, req: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {fn, payload, req};
    }
  },
  /**
   * parsePayloadSuccess Action.
   * 
   * @param {any} id 
   * Data properties:
   *
   *  - `result` – `{any}` - 
   * @param {any} meta (optional).
   * 
   */
  parsePayloadSuccess: class implements Action {
    public readonly type = ParserActionTypes.PARSE_PAYLOAD_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * parsePayloadFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  parsePayloadFail: class implements Action {
    public readonly type = ParserActionTypes.PARSE_PAYLOAD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyDevices Action.
   * Creates a new instance in Devices of this model.
   *
   * @param {any} id Parser id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyDevices: class implements Action {
    public readonly type = ParserActionTypes.CREATE_MANY_DEVICES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyDevicesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyDevicesSuccess: class implements Action {
    public readonly type = ParserActionTypes.CREATE_MANY_DEVICES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyDevicesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyDevicesFail: class implements Action {
    public readonly type = ParserActionTypes.CREATE_MANY_DEVICES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});