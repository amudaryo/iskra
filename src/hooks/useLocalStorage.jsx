import { useEffect, useState } from "react";

// use like useState hook to access a key in local storage
// const [key] = useStorage('key) to only access a key
// const [key, setKey] = useStorage('key) to access and OVERWRITE data stored
// using setKey DOES destroy previous data
const useStorage = (key) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) ?? ""
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};

// use like useState hook to access a arrays stored by day in local storage
// const [key] = useStorageByDay('key) to only access the array
// const [key, setKey] = useStorageByDay('key) to access and ADD new items to the array
// using setKey does NOT destroy previous data
const useStorageByDay = (key, day) => {
  const [value, setValue] = useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))[day]
        ? JSON.parse(localStorage.getItem(key))[day]
        : []
      : []
  );

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem(key));
    data = { ...data, ...{ [day]: value } };
    localStorage.setItem(key, JSON.stringify(data, { data }));
  }, [day, value, key]);
  return [value, setValue];
};

export { useStorageByDay, useStorage };
