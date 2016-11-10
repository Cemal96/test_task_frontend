import { Observable } from "rxjs/Rx";
import { Response} from '@angular/http';

export class ErrorService {

  constructor() { }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
