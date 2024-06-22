import type { NextPage } from 'next'
import useWSR from 'swr'
import { fetcher } from '@/utils'

const Index: NextPage = () => {
  const url: string = 'http://localhost:3000/api/v1/health_check'
  const { data, error } = useWSR(url, fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div>Rails疎通確認</div>
      <div>レスポンスメッセージ：{data.message}</div>
    </>
  )
}

export default Index
