#include <reg51.h>
delay()
{
	int i,j;
	for (i=0; i<200; i++)
	{
		for (j=0; j<100; j++)
		{
		}
	}
}

void main()
{
	int k;
	while(1)
	{
		P3 = 0X01;
		delay();
		P3 = 0X02;
		delay();
		P3 = 0X04;
		delay();
		P3 = 0X08;
		delay();
		P3 = 0X10;
		delay();
		P3 = 0X20;
		delay();
		P3 = 0X40;
		delay();
		P3 = 0X80;
		delay();
	}
}
