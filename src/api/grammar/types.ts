export interface IThemeList {
    id: number;
    name: string;
}

export interface ITheme {
    id: number;
    name: string;
    description: string;
    test: ITest[];
    testType: TTestType;
}

export interface ITest {
    question: string;
    right: string;
    variants: string[];
}

export type TTestType = 'boxWords' | 'prompts' | 'rewriteWord' | 'writeWord' | 'rewriteSentence' | 'translate' | 'boolean' | 'chooseWords' | 'selectWord' | 'test';