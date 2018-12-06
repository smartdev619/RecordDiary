import { ofType } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';

const fetchWallsEpic = action$ => action$.pipe(
  ofType('PING'),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo({ type: 'PONG' })
);

export default fetchWallsEpic