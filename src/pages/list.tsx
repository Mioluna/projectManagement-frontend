import SearchBar from '@/components/SearchBar'
import FilterButton from '@/components/FilterButton'
import ProfileButton from '@/components/ProfileButton'
import { Users, BriefcaseBusiness } from 'lucide-react';

export default function ListPage() {
  return (
    <div className="m-4">
      <div className="relative flex items-center w-full">

        {/* LEFT: Logo + Title */}
        <div className="flex items-center gap-3">
          <img 
            src='/icon.png' 
            alt='light bulb with gear' 
            className="w-10 h-10"
          />
          <h1 className="font-header font-semibold text-3xl">ProTRACK</h1>
        </div>

        {/* CENTER: Filters + Searchbar (TRUE CENTER) */}
        <div className="left-1/2 absolute flex items-center gap-3 w-[40%] -translate-x-1/2">
          <FilterButton icon={<Users size={20} />} />
          <FilterButton icon={<BriefcaseBusiness size={20} />} />

          <div className="flex-1">
            <SearchBar onSearch={() => {}} placeholder="Search for..." />
          </div>
        </div>

        {/* RIGHT: Profile button */}
        <div className="ml-auto">
          <ProfileButton />
        </div>

      </div>
    </div>
  );
}
