'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

// ========================================================================
// SEARCH COMPONENT =======================================================
// ========================================================================
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState(
    searchParams.get('query')?.toString() || '',
  );

  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (inputValue) {
      params.set('query', inputValue);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  // RETURN =================================================================
  return (
    <form
      onSubmit={handleSearch}
      className="relative flex flex-1 flex-shrink-0"
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <MagnifyingGlassIcon
        onClick={handleSearch}
        className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
      />
    </form>
  );
}
