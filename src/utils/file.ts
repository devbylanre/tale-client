const filer = {
  ext: (name: string) => {
    const parts = name.split('.');
    const ext = parts[parts.length - 1];

    return ext;
  },
  name: (name: string, end: number) => {
    const ext = filer.ext(name);
    const nameWithoutExt = name.split(ext)[0];
    let originalName = '';

    if (nameWithoutExt.length > end) {
      originalName = nameWithoutExt.substring(0, end) + '...';
    } else {
      originalName = nameWithoutExt;
    }

    return originalName;
  },
  inMB: (size: number) => {
    return (size / 1024 ** 2).toFixed(1);
  },
};

export default filer;
