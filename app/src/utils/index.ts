export function title(name?: string): string {
    const title = "NuTrack";

    if (!name) {
        return `${title}`;
    }

    return `${name} - ${title}`;
}
