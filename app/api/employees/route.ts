import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const page = parseInt(searchParams.get('page') || '1');
		const limit = parseInt(searchParams.get('limit') || '10');
		const search = searchParams.get('search') || '';
		const department = searchParams.get('department') || '';

		const skip = (page - 1) * limit;

		const where: Prisma.EmployeeWhereInput = {};

		if (department && department !== 'all' && department !== '') {
			where.department = department;
		}

		if (search) {
			where.OR = [
				{
					name: {
						contains: search,
						mode: 'insensitive',
					},
				},
				{
					email: {
						contains: search,
						mode: 'insensitive',
					},
				},
			];
		}

		const employees = await prisma.employee.findMany({
			where,
			skip,
			take: limit,
			orderBy: {
				createdAt: 'desc',
			},
		});

		return NextResponse.json({
			data: employees,
			page,
			limit,
		});
	} catch {
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
