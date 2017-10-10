export class HealthInfo {
    node = '';
    serviceName = '';
    status = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
