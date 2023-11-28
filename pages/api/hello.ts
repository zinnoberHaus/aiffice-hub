import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', // 指定函数的运行时
};

export default (req: NextRequest) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};