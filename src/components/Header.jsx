import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { getUser } from '../services/userAPI'; // Supondo que você tenha uma função getUser em '../services/userAPI'

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/search" passHref>
          <div>
            <BiSearchAlt />
            Busca
          </div>
        </Link>

        <Link href="/favorites" passHref>
          <div>
            <AiOutlineStar />
            Favoritas
          </div>
        </Link>

        <Link href="/profile" passHref>
          <div>
            <CgProfile />
            Perfil
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;