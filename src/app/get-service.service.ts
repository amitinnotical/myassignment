import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  apiPoint = 'https://api.spacexdata.com/';
  apiVersion = 'v3';
  apiEndPoint = '/launches';

  constructor(private readonly httpClient: HttpClient) { }

  getData(params: object): any {
    return this.httpClient.get(`${this.apiPoint}${this.apiVersion}${this.apiEndPoint}?${this.getParamData(params)}`);
  }
  getParamData(params: any): string {
    const paramsArr = [];
    for (const p in params) {
      if (params.hasOwnProperty(p)) {
        paramsArr.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
      }
    }
    return paramsArr.join('&');
  }
}
