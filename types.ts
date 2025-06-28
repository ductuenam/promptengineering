export type ModalId = 
  | 'temperatureModal' 
  | 'topKModal' 
  | 'topPModal' 
  | 'zeroShotModal' 
  | 'fewShotModal' 
  | 'rolePromptModal' 
  | 'cotModal' 
  | 'selfConsistencyModal' 
  | 'totModal' 
  | 'reActModal'
  | 'stepBackModal'
  | 'apeModal'
  | 'codeWriteModal'
  | 'codeExplainModal';

export interface InfoCardData {
    id: ModalId;
    icon: string;
    title: string;
    description: string;
}

export interface TechniqueData {
    id: ModalId;
    title: string;
    description: string;
    containerClassName?: string;
    isNew?: boolean;
}

export interface BestPracticeData {
    title: string;
    description: string;
    doText: string;
    dontText: string;
    doCode: string;
    dontCode: string;
}