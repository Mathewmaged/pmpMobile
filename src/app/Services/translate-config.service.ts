import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  static switchLanguage(value: any) {
    throw new Error("Method not implemented.");
  }
public dirLang =" asd" ;
  constructor(
    private translate: TranslateService
  ) { }

  getDefaultLanguage() {
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }
}
