// app/api/visitors/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@libs/mongodb';
import { getClientIp } from '@/utils/ip';

const FIFTEEN_MINUTES = 15 * 60 * 1000;

export async function POST(req: NextRequest) {
  try {
    const db = await dbConnect();
    const collection = db.collection('visitors');

    const ip = getClientIp(req);
    const userAgent = req.headers.get('user-agent') || '';
    const data = await req.json();

    const fifteenMinutesAgo = new Date(Date.now() - FIFTEEN_MINUTES);

    const recentVisit = await collection.findOne({
      ip,
      timestamp: { $gte: fifteenMinutesAgo }
    });

    if (recentVisit) {
      return NextResponse.json(
        {
          success: true,
          message: 'Recent visit exists, skipping record',
          isRecent: true
        },
        { status: 200 }
      );
    }

    const visitorInfo = {
      ip,
      userAgent,
      timestamp: new Date(),
      path: data.path || '/',
      referrer: req.headers.get('referer') || '',
    };

    await collection.insertOne(visitorInfo);

    return NextResponse.json(
      {
        success: true,
        message: 'Visitor information saved',
        isRecent: false
      },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}
