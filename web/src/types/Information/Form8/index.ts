import { applicantJsonDataType, respondentsJsonDataType } from "../json";

export interface form8FormsJsonDataType {
    id: number;
    personId: number;
    type: string;
    status: string;
    modified: string;
    archive: boolean;
    packageUrl?: string;
    packageNumber?: string;
    pdf_types: string;
    data: form8DataInfoType;
    description: string;
}

export interface form8StatusInfoType {
    first?: boolean;
    second?: boolean;
    third?: boolean;
    thirdError?: boolean;
}

export interface form8SearchInfoType {
    file: string;
    lastName: string;
    firstName: string;
    organizationName?: string;
    searchBy: string;
}

export interface form8DataInfoType {
    formSevenNumber:string;
    appellants: applicantJsonDataType[];
    respondents: respondentsJsonDataType[];
    respondentNames: string;
    appellantNames: string;
    judgeName: string;
    orderDate: string;   
    filingParties: string[];  
    authorizedName: string; 
    completionDate?: string;
    version?: string;
}