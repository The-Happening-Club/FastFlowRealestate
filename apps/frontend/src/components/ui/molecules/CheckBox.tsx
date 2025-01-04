'use client';

import Image from 'next/image';
import { useState } from 'react';

const AvatarCheckBox = () => {
  const [checked, isChecked] = useState<boolean>(false);
  return (
    <div>
      <label htmlFor="">
        <input type="text" />
        <Image
          src="./avatar-placeholder.png"
          width={50}
          height={50}
          alt="image of {user}"
        />
      </label>
    </div>
  );
};
