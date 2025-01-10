export const formatPostDate = (dateStr: string) => {
    const formatDate = dateStr?.split(" ")[0];
    const date = new Date(formatDate?.split("/").reverse().join("/"));

    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });

    return formatter.format(date);
};
