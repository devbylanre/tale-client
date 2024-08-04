import { useEffect, useState } from 'react';

const useFileReader = (file: File) => {
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    if (percent === 100) return;

    const reader = new FileReader();

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        setPercent(progress);
      }
    };

    reader.onloadend = () => setPercent(100);
    reader.readAsDataURL(file);

    return () => reader.abort();
  }, [file, percent]);

  return { percent };
};

export default useFileReader;
