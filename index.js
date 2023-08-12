import { useState } from 'react';
import { useRouter } from 'next/router';
import querystring from 'querystring';

const IndexPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  const generatePicture = () => {
    if (name) {
      const pictureUrl = generatePictureUrl(name);
      router.push({
        pathname: '/generated',
        search: querystring.stringify({ picture: pictureUrl }),
      });
    }
  };

  const generatePictureUrl = (name) => {
    const baseUrl = 'https://avatars.dicebear.com/api/bottts';
    return `${baseUrl}/${name}.svg`;
  };

  return (
    <div>
      <h1>Profile Picture Generator</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={generatePicture}>Generate</button>
    </div>
  );
};

export default IndexPage;
