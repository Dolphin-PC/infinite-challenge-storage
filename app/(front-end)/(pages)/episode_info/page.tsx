import SeasonSelect from '@/app/(front-end)/(pages)/episode_info/SeasonSelect'
import { SearchInterface } from '@/app/lib/types'

export default function page({
  searchParams
}: {
  searchParams: SearchInterface
}) {
  return (
    <div className="w-full">
      <SeasonSelect url_season={searchParams?.season} />
    </div>
  )
}
