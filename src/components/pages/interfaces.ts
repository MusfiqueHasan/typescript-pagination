export interface InitPost {
    title: string,
    url: string,
    created_at: string,
    author: string
}


export interface Column {
    id: "title" | "url" | "created_at" | "author",
    label: string,
    minWidth?: number,
    align?: "right"
}

export interface TableDataInit {
    posts: InitPost[],
    paginationPage: number,
    rowsPerPage: number
    getDetails: any,
    isLoading: boolean
}

export interface useDataType {
    tempPage: number;
    paginationPage: number;
    totalPostCount: number;
    isLoading: boolean;
    posts: InitPost[];
    postInterval: typeof setInterval;
    rowsPerPage: number;
    tempPageStart: number;
    setPaginationPage: React.Dispatch<React.SetStateAction<number>>;
    setTempPage: React.Dispatch<React.SetStateAction<number>>;
    setTempPageStart: React.Dispatch<React.SetStateAction<number>>;
}