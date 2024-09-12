import Logo from "./logo";
import SearchForm from "./searchForm";
import BookmarksButton from "./bookmarksButton";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="relative mb-0">
      {children}

      <HeaderTop>
        <Logo />
        <BookmarksButton />
      </HeaderTop>
      <SearchForm />
    </header>
  );
}

export function HeaderTop({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center max-w-[1000px] px-3 mx-auto pt-10 justify-center relative animate-[intro_0.3s]">
      {children}
    </div>
  );
}

