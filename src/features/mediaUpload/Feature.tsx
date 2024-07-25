import React, { useRef, useState } from 'react';
import Container from '../../components/Container/Container';
import Widget from './components/Widget';
import List from './components/List';
import filer from '../../utils/file';
import Flex from '../../components/Flex/Flex';
import Button from '../../components/Button/Button';
import useUser from '../../hooks/useUser';

const MediaUploadFeature = () => {
  const { user } = useUser();
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number[]>([]);

  const openStorage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
    setErrors([]);

    setUploadProgress(Array(selectedFiles.length).fill(0));

    selectedFiles.forEach((file, index) => {
      uploadFile(file, index);
      const ext = filer.ext(file.name);
      const acceptedExts = ['png', 'gif', 'jpg', 'mp3'];

      if (file.size > 5 * 1024 ** 2) {
        setErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = 'File size is too big. Max file size is 5MB';
          return newErrors;
        });
      } else if (!acceptedExts.includes(ext)) {
        setErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = 'File format is not supported';
          return newErrors;
        });
      } else {
        setErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = '';
          return newErrors;
        });
      }
    });

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const uploadFile = (file: File, index: number) => {
    const reader = new FileReader();

    reader.onprogress = (event) => {
      const progress = (event.loaded / event.total) * 100;
      setUploadProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[index] = progress;
        return newProgress;
      });
    };

    reader.onloadend = () => {
      // Upload file to your server here
      setUploadProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[index] = 100;
        return newProgress;
      });
    };

    reader.readAsDataURL(file);
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setUploadProgress((prevProgress) =>
      prevProgress.filter((_, i) => i !== index)
    );
    setErrors((prevErrors) => prevErrors.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('medias', file);
    });

    const BEARER_TOKEN = JSON.parse(localStorage.getItem('accessToken') || '');

    try {
      const response = await fetch(
        `http://localhost:4000/rest/medias/${user ? user._id : ''}`,
        {
          mode: 'cors',
          method: 'POST',
          body: formData,
          credentials: 'include',
          headers: { authorization: `BEARER ${BEARER_TOKEN}` },
        }
      );

      if (!response.ok) {
        console.log('Unable to upload medias');
      }

      const data = await response.json();

      console.log({ data });
      setFiles([]);
      setErrors([]);
      setUploadProgress([]);
    } catch (error) {
      console.log({ error: (error as Error).message });
    }
  };

  return (
    <Container spaceY={'3xl'}>
      <Widget
        inputRef={inputRef}
        openStorage={openStorage}
        handleChange={handleChange}
        uploadProgress={uploadProgress}
      />
      <List
        errors={errors}
        files={files}
        removeFile={removeFile}
        uploadProgress={uploadProgress}
      />

      <Flex mt={'3xl'}>
        <Button
          size={14}
          weight={500}
          width={'full'}
          type={'submit'}
          borderRadius={'max'}
          onClick={handleSubmit}
          disabled={
            errors.some((error) => error.length > 1) ||
            uploadProgress.some((progress) => progress !== 100) ||
            files.length < 1
          }
        >
          Upload Medias
        </Button>
      </Flex>
    </Container>
  );
};

export default MediaUploadFeature;
