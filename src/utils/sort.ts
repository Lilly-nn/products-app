export function sortUnique(arr: string[] | undefined) {
    if (arr) {
        return [...new Set(arr)] as string[];
    }
}