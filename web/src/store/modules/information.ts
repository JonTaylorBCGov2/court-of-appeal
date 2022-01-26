import { locationsInfoType } from '@/types/Common';
import { pathwayTypeInfoType } from '@/types/Information';
import { form2DataInfoType } from '@/types/Information/Form2';
import { form5DataInfoType } from '@/types/Information/Form5';
import { userAccessInfoType, form7StatesInfoType, form7SubmissionDataInfoType } from '@/types/Information/Form7';
import { caseJsonDataType, journeyJsonDataType, partiesDataJsonDataType, supremeCourtCaseJsonDataInfoType, supremeCourtOrdersJsonInfoType } from '@/types/Information/json';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
class Information extends VuexModule {
    
    public casesJson: caseJsonDataType[] = [];
    public journeyJson = {} as journeyJsonDataType;
    public pathType = {} as pathwayTypeInfoType;
    public partiesJson = {} as partiesDataJsonDataType;
    public form2Info = {} as form2DataInfoType;
    public form5Info = {} as form5DataInfoType;
    public form7FormsJson: form7SubmissionDataInfoType[] = [];
    public form7SubmissionInfo = {} as form7SubmissionDataInfoType;
    public form7AccessInfo: userAccessInfoType[] = [];
    public form7InfoStates = {} as form7StatesInfoType;
    public supremeCourtCaseJson: supremeCourtCaseJsonDataInfoType;
    public supremeCourtOrderJson: supremeCourtOrdersJsonInfoType;
    
    public fileNumber = "";  
    public currentCaseId = null;
    public currentNoticeOfAppealId = null;  
    public caseLocation: locationsInfoType; 

    @Mutation
    public setCasesJson(casesJson: caseJsonDataType[]): void {   
        this.casesJson = casesJson;
    }    
    @Action
    public UpdateCasesJson(newCasesJson: caseJsonDataType[]): void {
        this.context.commit('setCasesJson', newCasesJson);
    }

    @Mutation
    public setJourneyJson(journeyJson: journeyJsonDataType): void {   
        this.journeyJson = journeyJson;
    }    
    @Action
    public UpdateJourneyJson(newJourneyJson: journeyJsonDataType): void {
        this.context.commit('setJourneyJson', newJourneyJson);
    }

    @Mutation
    public setPathType(pathType: pathwayTypeInfoType): void {   
        this.pathType = pathType;
    }    
    @Action
    public UpdatePathType(newPathType: pathwayTypeInfoType): void {
        this.context.commit('setPathType', newPathType);
    } 
    
    @Mutation
    public setPartiesJson(partiesJson: partiesDataJsonDataType): void {   
        this.partiesJson = partiesJson;
    }    
    @Action
    public UpdatePartiesJson(newPartiesJson: partiesDataJsonDataType): void {
        this.context.commit('setPartiesJson', newPartiesJson);
    }

    @Mutation
    public setForm2Info(form2Info: form2DataInfoType): void {   
        this.form2Info = form2Info;
    }    
    @Action
    public UpdateForm2Info(newForm2Info: form2DataInfoType): void {
        this.context.commit('setForm2Info', newForm2Info);
    }  

    @Mutation
    public setForm7FormsJson(form7FormsJson: form7SubmissionDataInfoType[]): void {   
        this.form7FormsJson = form7FormsJson;
    }    
    @Action
    public UpdateForm7FormsJson(newForm7FormsJson: form7SubmissionDataInfoType[]): void {
        this.context.commit('setForm7FormsJson', newForm7FormsJson);
    }    

    @Mutation
    public setForm5Info(form5Info: form5DataInfoType): void {   
        this.form5Info = form5Info;
    }    
    @Action
    public UpdateForm5Info(newForm5Info: form5DataInfoType): void {
        this.context.commit('setForm5Info', newForm5Info);
    }

    @Mutation
    public setForm7SubmissionInfo(form7SubmissionInfo: form7SubmissionDataInfoType): void {   
        this.form7SubmissionInfo = form7SubmissionInfo;
    }    
    @Action
    public UpdateForm7SubmissionInfo(newForm7SubmissionInfo: form7SubmissionDataInfoType): void {
        this.context.commit('setForm7SubmissionInfo', newForm7SubmissionInfo);
    }

    @Mutation
    public setForm7AccessInfo(form7AccessInfo: userAccessInfoType[]): void {   
        this.form7AccessInfo = form7AccessInfo;
    }    
    @Action
    public UpdateForm7AccessInfo(newForm7AccessInfo: userAccessInfoType[]): void {
        this.context.commit('setForm7AccessInfo', newForm7AccessInfo);
    }   

    @Mutation
    public setForm7InfoStates(form7InfoStates: form7StatesInfoType): void {   
        this.form7InfoStates = form7InfoStates;
    }    
    @Action
    public UpdateForm7InfoStates(newForm7InfoStates: form7StatesInfoType): void {
        this.context.commit('setForm7InfoStates', newForm7InfoStates);
    }

    @Mutation
    public setSupremeCourtCaseJson(supremeCourtCaseJson: supremeCourtCaseJsonDataInfoType): void {   
        this.supremeCourtCaseJson = supremeCourtCaseJson;
    }    
    @Action
    public UpdateSupremeCourtCaseJson(newSupremeCourtCaseJson: supremeCourtCaseJsonDataInfoType): void {
        this.context.commit('setSupremeCourtCaseJson', newSupremeCourtCaseJson);
    }

    @Mutation
    public setSupremeCourtOrderJson(supremeCourtOrderJson: supremeCourtOrdersJsonInfoType): void {   
        this.supremeCourtOrderJson = supremeCourtOrderJson;
    }    
    @Action
    public UpdateSupremeCourtOrderJson(newSupremeCourtOrderJson: supremeCourtOrdersJsonInfoType): void {
        this.context.commit('setSupremeCourtOrderJson', newSupremeCourtOrderJson);
    }

    @Mutation
    public setFileNumber(fileNumber: string): void {   
        this.fileNumber = fileNumber;
    }    
    @Action
    public UpdateFileNumber(newFileNumber: string): void {
        this.context.commit('setFileNumber', newFileNumber);
    }

    @Mutation
    public setCaseLocation(caseLocation: locationsInfoType): void {   
        this.caseLocation = caseLocation;
    }    
    @Action
    public UpdateCaseLocation(newCaseLocation: locationsInfoType): void {
        this.context.commit('setCaseLocation', newCaseLocation);
    }

    @Mutation
    public setCurrentCaseId(currentCaseId: string): void {   
        this.currentCaseId = currentCaseId;
    }    
    @Action
    public UpdateCurrentCaseId(newCurrentCaseId: string): void {
        this.context.commit('setCurrentCaseId', newCurrentCaseId);
    }

    @Mutation
    public setCurrentNoticeOfAppealId(currentNoticeOfAppealId: string): void {   
        this.currentNoticeOfAppealId = currentNoticeOfAppealId;
    }    
    @Action
    public UpdateCurrentNoticeOfAppealId(newCurrentNoticeOfAppealId: string): void {
        this.context.commit('setCurrentNoticeOfAppealId', newCurrentNoticeOfAppealId);
    }
    
}

export default Information