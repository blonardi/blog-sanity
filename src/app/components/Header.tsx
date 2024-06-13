import Link from "next/link";

interface Props {
	title: string;
	tags?: boolean;
	propietarios?: boolean
}

export function Header({ title = "", tags = false, propietarios = false }: Props) {
	return(
		<header className="py-14 px-4 mb-12 text-center border-b dark:border-lime-900">
			<div className="flex justify-around items-center">
				<div>
					<Link href={'/'}> 
						<h2 className="uppercase text-2xl mx-auto max-w-2xl font-bold block w-min">{title}</h2>
					</Link>
				</div>
				<div>
					<Link href={'/inmuebles'}> 
						<h2 className="uppercase text-2xl mx-auto max-w-2xl font-bold">Inmuebles</h2>
					</Link>
				</div>
			</div>
			{(tags || propietarios) && (
        <div className="text-xs mt-2 hover:text-lime-500">
          <Link href={tags ? '/tag' : '/propietarios'}>
            {tags ? '#tags' : '#propietarios'}
          </Link>
        </div>
      )}
		</header>
	)
}