import { QBOClass } from '../models/enums';
import {nanoid} from 'nanoid';

export class Expense {

    id: string;

    expenseDate: Date;

    subtotal: number;

    pstAmount: number;

    gstAmount: number;

    otherTaxAmount!: number;

    tipAmount!: number;

    isProject: boolean;

    projectCustomer: string;

    qboCategory: string;

    isClaimableMealType: boolean;

    qboClass: QBOClass;

    notes: string;

    //File media field... byte array?
    mediaFiles!: File[];

    constructor() {
        this.id = nanoid();
        this.expenseDate = new Date();
        this.subtotal = 0;
        this.pstAmount = 0;
        this.gstAmount = 0;
        this.isProject = false;
        this.projectCustomer = '';
        this.qboCategory = 'test';
        this.isClaimableMealType = false;
        this.qboClass = QBOClass.Solar;
        this.notes = '';
    }

}
