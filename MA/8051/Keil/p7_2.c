#include<reg51.h>

void delay(){
	int i,j;
	
	for(i=0;i<200;i++){
		for(j=0;j<300;j++){
			
		}
	}
}

void main()
{
	while(1)
		{
			int k;
			P1 = 0x00;
			P2 = 0x00;
			P3 = 0x00;
			delay();
			P1 = 0x02;
			delay();
			P1 = 0x08;
			delay();
			P1 = 0x20;
			delay();
			P1 = 0x80;
			delay();
			P1 = 0x00;


			P2 = 0x02;
			delay();
			P2 = 0x08;
			delay();
			P2 = 0x20;
			delay();
			P2 = 0x80;
			delay();
			P2 = 0x00;
			

			P3 = 0x02;
			delay();
			P3 = 0x08;
			delay();
			P3 = 0x20;
			delay();
			P3 = 0x80;
			delay();
			P3 = 0x00;

			for (k=0; k<5; k++)
			{
				P1= 0xFF;
				P2= 0xFF;
				P3= 0xFF;
				delay();
				P1= 0x00;
				P2= 0x00;
				P3= 0x00;
				delay();
			}
			
			P3 = 0x40;
			delay();
			P3 = 0x10;
			delay();
			P3 = 0x04;
			delay();
			P3 = 0x01;
			delay();
			P3 = 0x00;
			delay();
				
			P2 = 0x40;
			delay();
			P2 = 0x10;
			delay();
			P2 = 0x04;
			delay();
			P2 = 0x01;
			delay();
			P2 = 0x00;
			delay();
			
			P1 = 0x40;
			delay();
			P1 = 0x10;
			delay();
			P1 = 0x04;
			delay();
			P1 = 0x01;
			delay();
			P1 = 0x00;
			delay();

	}
	
}