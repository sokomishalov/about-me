import fileDownload from "js-file-download";

export const openPage = (url) => window.open(url, "_blank")

export const downloadResource = async (resource, name = resource.toString()) => {

    const response = await fetch(resource)
    const data = await response.arrayBuffer();

    return fileDownload(data, name);
}