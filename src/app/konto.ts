import { KontoNrTyp } from './kontonrtyp';

export class Konto {
  constructor(
    public id: number,
    public kontoNummer: KontoNrTyp,
    public kontoStand: number) { }
}
