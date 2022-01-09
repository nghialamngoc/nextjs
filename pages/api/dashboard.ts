import { data } from '../../data/dashboard'
export default function aa(req: any, res: any) {
  if (req.method === 'GET') {
    res.status(200).json(data)
  } else if (req.method === 'POST') {
    console.log(req.body)
  }
}
