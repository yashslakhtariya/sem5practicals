#include<REGX51.H>

void main()
{
	unsigned char num[]	= {0x5b, 0x06, 0x06, 0x7d, 0x5b, 0x06, 0x3f, 0x06, 0x3f, 0x06, 0x5b}; //21162101012
	
	P1 = 0x00;
	while(1)
	{
		int i,j,k;
		for(i=0; i<sizeof(num); i++)
		{
			P1 = num[i];
			for(j=0; j<32000; j++)
			{}
			for(j=0; j<32000; j++)
			{}
		}
		for(k=0; k<30000; k++)
		{
			P1 = 0x00;
		}
	}
}