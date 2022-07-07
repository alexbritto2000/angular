import { AbstractControl, FormGroup } from '@angular/forms';

export function emailDomain(controller: AbstractControl): { [key: string]: any } /* if true */| null /* else false */ {   console.log(controller.value);
    const email: string = controller.value;
    const domain = email.substring(email.lastIndexOf('@')+1);
    if (email === '' || domain.toLowerCase() === 'sabbatech.com') {
      return null;
    }
    else{
      return{'emailDomain':'Email should be end with sabbatech.com'};
    }
  }