export const getAddress = async function ({ latitude, longitude }) {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
    );
    if (!res.ok) {
      throw new Error('Failed getting adress');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
  }
};

export const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
