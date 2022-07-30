
export interface PaginationInfor {
    minPage: number;
    maxPage: number;
}

export function pagination(pageCount: number, displayPageCount: number, pageIndex: number): PaginationInfor {
    if (pageIndex < 1) {
        pageIndex = 1;
    }
    if (pageIndex > pageCount) {
        pageIndex = pageCount;
    }

    let minPage = pageIndex - Math.floor(displayPageCount / 2);
    if (minPage < 1) {
        minPage = 1;
    }
    let maxPage = minPage + displayPageCount - 1;
    if (maxPage > pageCount) {
        maxPage = pageCount;
    }

    if (maxPage === pageCount) {
        minPage = maxPage - displayPageCount + 1;
        if (minPage < 1) {
            minPage = 1;
        }
    }

    return {
        minPage,
        maxPage,
    };
}

export function GetSequence(minPage: number, maxPage: number) {
    const numbers = [];
    for (let i = minPage; i <= maxPage; i++) {
        numbers.push(i);
    }
    return numbers;
}