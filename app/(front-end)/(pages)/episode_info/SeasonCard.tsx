import { Paper, Typography } from '@mui/material'
import { Divider_2_4 } from '../../components/Dividers'
import { IconLink } from '../../lib/icons'
import { SeasonInterface } from '@/app/lib/types'
import Image from 'next/image'

export default function SeasonCard({
  seasonInfo: ssn
}: {
  seasonInfo: SeasonInterface
}) {
  return (
    <Paper elevation={3} className="mt-2 p-5">
      <Typography variant="h5">{ssn.title}</Typography>
      <Divider_2_4 />
      <div className="flex w-full">
        <div className="w-3/12">
          <Image
            src={ssn.img_src}
            alt={ssn.season}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
            className="rounded-xl"
          />
        </div>
        <div className="flex w-9/12 flex-col justify-between pl-4">
          <div>
            <Typography variant="h5">{ssn.description}</Typography>
            <div className="mt-4 flex">
              <div className="mr-4">
                <Typography variant="h6">개요</Typography>
                <Typography variant="h6">출연</Typography>
              </div>
              <div className="w-9/12">
                <Typography variant="h6">{ssn.outline}</Typography>
                <Typography variant="h6">{ssn.actor.join(', ')}</Typography>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <a
              className="color flex rounded-lg p-3"
              href={ssn.view_url || ''}
              target="_blank">
              <div className="mr-2">
                <IconLink />
              </div>
              다시보기 링크
            </a>
          </div>
        </div>
      </div>
    </Paper>
  )
}
