declare module 'tableau-api' {
    export interface VizCreateOptions {
      hideTabs?: boolean;
      hideToolbar?: boolean;
      onFirstInteractive?: () => void;
      width?: string | number;
      height?: string | number;
    }
  
    export class Viz {
      constructor(
        element: HTMLElement,
        url: string,
        options?: VizCreateOptions
      );
      dispose(): void;
      getWorkbook(): Workbook;
    }
  
    export class Workbook {
      activateSheetAsync(sheetNameOrIndex: string | number): Promise<Sheet>;
    }
  
    export class Sheet {
      getWorksheets(): Worksheet[];
    }
  
    export class Worksheet {
      getName(): string;
      getDataSourcesAsync(): Promise<DataSource[]>;
    }
  
    export class DataSource {
      getName(): string;
      getFields(): Field[];
    }
  
    export class Field {
      getName(): string;
    }
  
    export namespace VizManager {
      function getVizs(): Viz[];
    }
  }
  